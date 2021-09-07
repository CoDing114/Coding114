# 나도코딩 (기본편)
# # 1. 숫자 자료형
# 2. 문자열 자료형
# 3. boolean 자료형 [ True / False]
# 4. 변수
# 5. 연산자
from random import *
from math import *
print(1+1)  # 2
print(7-5)  # 2
print(2 * 3)  # 6
print(6/2)  # 3

print(2**3)  # 2^3 = 8 승
print(5 % 3)  # 나머지 구하기 2
print(5//3)  # 몫 1

print(2 < 3)  # True
print(2 > 3)  # False

print(1 != 3)  # True 같지않다
print(not(1 != 3))  # False

print((2 < 3) and (2 > 3))  # False
print((2 < 3) & (2 > 3))  # False

print((2 < 3) or (2 > 3))  # True
print((2 < 3) | (2 > 3))  # True

# 6. 간단한 수식
print(" 6. 간단한 수식")
print(2+3*3)    # 11
print((2+3)*3)  # 15
number = 2 + 3 * 3  # 11
print(number)
number = number + 2  # 13
print(number)
number += 2  # 15
print(number)

# 7. 숫자 처리 함수
print("7. 숫자 처리 함수")
print(abs(-5))      # 5 # 절대값
print(pow(4, 2))    # 4^2 = 16
print(max(5, 12))   # 12 최대값
print(min(5, 12))   # 5  최저값
print(round(3.33))  # 3 반올림

# from math import *
print(floor(4.99))  # 4  내림.
print(ceil(3.14))   # 4  올림.
print(sqrt(16))     # 4 제곱근.

# 8. 랜덤 함수
print("# 8. 랜덤 함수")
#from random import *
print(random())  # 0.0 ~ 1.0
print(random() * 10)  # 0.0 ~ 10.0
print(int(random() * 10))  # 0.0 ~ 10.0
print(int(random() * 10) + 1)  # 0.0 ~ 10.0
print(randrange(1, 11))  # 0.0 ~ 10.0
print(randint(1, 10))  # 0.0 ~ 10.0

# 9. 문자열
print("""큰
따옴표
세개로
줄바꿈
 """)
# 10.슬라이싱
jumin = "221021-12324567"
print("생년월일:" + jumin[:6])              # 생년월일:221021
print("뒤7자리:" + jumin[7:])               # 뒤7자리:12324567
print("뒤7자리(뒤에서부터):" + jumin[-8:])   # 뒤7자리(뒤에서부터):12324567

# 11. 문자열 처리 함수
python = "Python is Amazing"
print(python.lower())  # 소문자
print(python.upper())  # 대문자
print(python[0].isupper())  # 첫문자 대문자인지 체크
print(len(python))  # 문자 길이
print(python.replace("Python", "Java"))  # 문자 바꾸기

index = python.index("n")  # 글자 시작 위치 찾기
print(index)

index = python.index("n", index + 1)  # 글자 찾기 위치 포지션 +1
print(index)

print(python.find("Java"))  # 찾으려는 문자가 없을때 -1을 반환한다

# 12. 문자열 포맷
# print("a","b")
# print("a"+"b")

# 방법 1
print("나는 %d 살입니다" % 20)  # 숫자를 받아온다
print("나는 %s을 좋아합니다" % "파이썬")  # 문자르 받아온다
print("Apple은 %c로 시작해요" % "A")  # 캐릭터를 받아온다 [1]
print("나는 %s과 %s를 좋아해요" % ("Python", "Java"))

# 방법 2
print("나는 {}살 입니다" .format(20))
print("나는 {1}과 {0}를 좋아해요" .format("Python", "Java"))

# 방법 3
print("나는 {age}살이며, {prg}을 좋아해요".format(age=20, prg="Python"))

# 방법 4 (3.6 이상~)
age = 20
prg = "python"
print(f"나는 {age}살이며, {prg}을 좋아해요")

# 4.5 탈출 문자
# \n :줄 바꿈
print("문장 \n 줄 바꿈")

# \": 문장내 \" \' 따옴표
print("저는 '코릴라' 입니다")
print("저는 \"코릴라\" 입니다")

# \\: 문장내 역슬러시 \
print("C:\\Bitnami\\wampstack-8.0.8-0\\apache2\\htdocs> ")  # 역슬러시 두개를 하나로 간주

# \r: 커서 맨 앞으로 이동
print("Red Apple\rPine")

# \b: 백스페이스 (한글자 삭제)
print("Redd\b Aapple")

# \t : Tap 탭
print("Red\tApple")


# ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

# 5-1 리스트

# subway1 = 10
# subway2 = 20
# subway3 = 30
subway = [10, 20, 30]
print(subway)

# 데이터 파인드
print(subway.index(20))

# 데이터 추가
subway.append(50)
print(subway)

# 원하는 위치에 데이터 추가
subway.insert(3, 66)
print(subway)

# 뒤에서 하나씩 빼기
print(subway.pop())
print(subway)

# 같은 데이터 몇개 잇는지 찾기
subway.append(20)
print(subway)
print(subway.count(20))

# 데이터 순서 정렬
subway.sort()
print(subway)

# 데이터 순서 뒤집기
subway.reverse()
print(subway)

# 데이터 합치기
subway2 = [99, 88, 77]
subway.extend(subway2)
print(subway)

# 모두 지우기
subway.clear()
print(subway)

# 5-2 사전
cabinet = {1: 10, 2: 20}
print(cabinet)

# 사전에서 데이터 불러오기 방법 #1
print(cabinet[1])
# 사전에서 데이터 불러오기 방법 #2
print(cabinet.get(3))
# ** 방법#1[] 사용시 데이터 없으면 오류 발생, 방법#2 .get사용시 데이터 없으면 None 반환. **
print(cabinet.get(3, "사용 가능"))  # None 대신 원하는 데이터 대체 가능

# 사전에 지정 Key가 잇는지 확인 가능
print(1 in cabinet)  # True

# 값 추가 혹은 업데이트
cabinet[2] = 88
cabinet[3] = 66
print(cabinet)

# Key Dilete , key 삭제
del cabinet[1]
print(cabinet)

# Key만 출력
print(cabinet.keys())

# value만 출력
print(cabinet.values())

# Key,value 쌍으로 출력
print(cabinet.items())

# Key.Clear
cabinet.clear()
print(cabinet)


# 5-3
# 튜플() : 데이터 추가 업데이트 되지 않은 반면 속도가 빠르다
# name = "CoRilla"
# age = 20
# hobby = "Coding"
# print(name, age, hobby)
(name, age, hobby) = ("CoRilla", 20, "Coding")
print(name, age, hobby)

# 5-4 집합 (set)
# 중복 안됨, 순서 없음
java = {"rilla", "miki", "joker"}
python = {"rilla", "huke"}

# 교집합 (Java 와 Python을 모두 할수 잇는 개발자)
print(java & python)
print(java.intersection(python))

# 합집합 (Java 혹은 Python 할수잇는 개발자)
print(java | python)
print(java.union(python))

# 차집합 (Java 할수잇지만 python 못하는 개발자)
print(java - python)
print(java.difference(python))

# 데이터 추가 python 할수 잇는 사람 늘어남
python.add("joker")
print(python)

# 데이터 삭제
java.remove("joker")
print(java)

# 5-5 자료 구조 변경
menu = {"커피", "우유", "주스"}
print(menu, type(menu))

menu = list(menu)
print(menu, type(menu))
menu = tuple(menu)
print(menu, type(menu))
menu = set(menu)
print(menu, type(menu))


# ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

# 6 - 1 if 조건문
temp = (-30)
# temp = int(input("기온은어때요？"))
if 30 <= temp:
    print("너무더워요.나가지마세요")
elif 10 <= temp and temp < 30:
    print("괜찮은날씨에요")
elif 0 <= temp < 10:
    print("외투를챙기세요")
else:
    print("너무추워요.나가지마세요")

# 6 - 2 for 반복문
# print("대기번호 : 1")
# print("대기번호 : 2")
# print("대기번호 : 3")
# print("대기번호 : 4")
# print("대기번호 : 5")
for waitiong_no in range(1, 6):  # [1,2,3,4,5]  # randrange()와 동일
    print("대기번호: {0}".format(waitiong_no))

starbucks = ["아이언맨", "토르", "그루트"]
for customer_st in starbucks:
    print("{0},커피가 준비 되었습니다.".format(customer_st))


# 6 - 3 while 반복문 어떤 조건이 만족될때까지 반복 2:09:33
customer_tr = "토르"
index_TR = 5
while index_TR >= 1:
    print("{0},커피가준비되었습니다.{1}번 남았어요.".format(customer_tr, index_TR))
    index_TR -= 1
    if index_TR == 0:
        print("커피는 폐기처분 되었습니다.")
