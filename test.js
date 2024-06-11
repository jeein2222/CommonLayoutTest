const url=new URL("https://example.com:8080/category/HTML?user=jiin");

//전체 웹 주소 반환
console.log(url.href); //https://example.com:8080/category/HTML?user=jiin

//origin : protocol+host+port
console.log(url.origin); //https://example.com:8080

//protocol : https or http
console.log(url.protocol); //https:

//host
console.log(url.host); //example.com:8080

//hostname : host에서 port 빼고
console.log(url.hostname); //example.com

//port
console.log(url.port); //8080

//상대경로 반환
console.log(url.pathname); //category/HTML

//?부터 hash(#)를 제외하고 반환
console.log(url.search); //?user=jiin

//상대 경로 추가하기
const url2 = new URL(',/category/HTML', 'https://example.com:8080');
console.log(url2.href); //https://example.com:8080/,/category/HTML

//params 추가 또는 수정하기
url2.search='?hello=jiin';
console.log(url2.href); //https://example.com:8080/,/category/HTML?hello=jiin

//URL 객체의 searchParams는 직접 조회나 수정이 안되고 메서드로 조작해야 하는 프로퍼티.
const url3= new URL('https://example.com:8080/category/HTML?user=jiin');

//조회
console.log(url3.searchParams.get('user'));//jiin

//추가
url3.searchParams.append('bye','javascript');
console.log(url3.href);//https://example.com:8080/category/HTML?user=jiin&bye=javascript

//수정
url3.searchParams.set('bye', 'python');
console.log(url3.href);//https://example.com:8080/category/HTML?user=jiin&bye=python

//삭제
url3.searchParams.delete('bye');
console.log(url3.href);//https://example.com:8080/category/HTML?user=jiin

/**
 * @method URLSearchParams : searchParams 부분만 단독으로 조작할 때 사용한다.
 */

const searchParams=new URLSearchParams('?user=jiin');

console.log(searchParams.get('user'));//jiin