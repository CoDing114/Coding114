from typing import Text
import requests     # http 요청을 보낼수 있다 pip install requests
import json
from openpyxl import Workbook  # 엑셀로 데이터 보낼때 사용 pip install openpyxl

custom_header = {
    'referer': "https://kimpga.com/"
    'user-agent'
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36",
}

wb = Workbook
ws1 = wb.active
# ws1.append(["market", "kor_name", "eng_name"])

url = "https://api.upbit.com/v1/market/all"

req = requests.get(url, headers=custom_header)
if req.status_code == requests.codes.ok:
    print("접속 성공")
    stock_data = json.loads(req.text)
    print(req.text)


print('----')

# wb.save("kimp.xlsx")
#     for rank in stock_data["data"]:
#         print(rank['korean_name'], rank['englisho_name'])

# else:
#     print("Error Code")
