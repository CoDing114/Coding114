import requests       # pip3 install requests
from bs4 import BeautifulSoup     # pip3 install BeautifulSoup4

url = "https://ofcourse.kr/js-course/JavaScript-%EC%9E%85%EB%AC%B8"

req = requests.get(url)
if req.status_code == requests.codes.ok:
    print("접속 성공")
    html = BeautifulSoup(req.text, "html.parser")

    items = html.select("a")
    for item in items:
        keyword = item.select_one("li")
        if keyword and keyword.text:
            print(keyword.text)

else:
    print("접속실패")
