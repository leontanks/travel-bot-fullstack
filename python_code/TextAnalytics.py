# load the Pandas Libraries with alias 'pd'
import pandas as pd
import json
import requests

config = json.load(open("config.json"))
text_analytics_base_url = "https://westcentralus.api.cognitive.microsoft.com/text/analytics/v2.0/"

# read data from file which is in the same
# directory that  your python process is based
df = pd.read_csv("/path/myfile.csv")

# format data for text analytics
documents = {"documents": []}

for idx, row in df.iterrows():
    documents["documents"].append({
        "id": str(idx + 1),
        "language": row["language"],
        "text": row["reviewer_review"]
    })

# create headers
headers = {"Ocp-Apim-Subscription-Key": config["subscriptionKey"]}

# perform sentiment analysis
sentiment_api_url = text_analytics_base_url + "sentiment"
response  = requests.post(sentiment_api_url, headers=headers, json=documents)
sentiments = response.json()

# save sentiments (which is a dictionary) to a json file
outputOne = open("SentimentsResults.json", "w+")
outputOne.write(json.dumps(sentiments, indent=4, sort_keys=True))
outputOne.close()

# perform extraction of key phrases
key_phrases_api_url = text_analytics_base_url + "keyPhrases"
response  = requests.post(key_phrases_api_url, headers=headers, json=documents)
key_phrases = response.json()

# save KeyTerms (which is a dictionary) to a json file
outputTwo = open("KeyPhrasesResults.json", "w+")
outputTwo.write(json.dumps(key_phrases, indent=4, sort_keys=True, ensure_ascii=False))
outputTwo.close()