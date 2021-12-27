1.파이어베이스설치
최신파일의경우 9라서 강의내용이 적용이안되서 8로재설치
 npm install firebase@8.2.7

2.구글 어카운트 연계
 firebase login

3.파이어베이스 초기화
 firebase init

4.public ? dist?

5.Select a default Firebase project for this directory: 대상프로젝트

6.나머지는 디폴트설정

7.빌드실행
 npm run build
 
8.디플로이
 firebase deploy

9.호스팅 url확인하기
 구글 호스팅 생성후 연계


예외:firebase use로 선택하기 프로젝트명 지정해주기 firebase use (프로젝트명)
dave@davenoMac-mini 1my-project % firebase use
Active Project: default (twitter-clone-ed30f)

Project aliases for /Users/dave/Desktop/인프런공부/1my-project:

* default (twitter-clone-ed30f)
