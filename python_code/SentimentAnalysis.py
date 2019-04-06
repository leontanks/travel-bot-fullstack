# load the Pandas Libraries with alias 'pd'
import pandas as pd
import json
import requests

config = json.load(open("config.json"))
text_analytics_base_url = "https://westcentralus.api.cognitive.microsoft.com/text/analytics/v2.0/"
sentiment_api_url = text_analytics_base_url + "sentiment"
print(sentiment_api_url)

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

headers = {"Ocp-Apim-Subscription-Key": config["subscriptionKey"]}
response  = requests.post(sentiment_api_url, headers=headers, json=documents)
sentiments = response.json()

# save a dictionary to a json file
outputFile = open("result.json", "w+")
outputFile.write(json.dumps(sentiments, indent=4, sort_keys=True))
outputFile.close()
