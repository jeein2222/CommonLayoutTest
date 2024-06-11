function loadPageContent(){
  console.log("loadPageContent");
  const contentBody = document.querySelector('content-body');

  // URL 매개변수에 따라 다른 content 파일을 로드
  /***
   * @method URLSearchParams: 주소창의 경로를 다룰 수 있는 브라우저 내장 객체
   */

  const urlParams = new URLSearchParams(window.location.search);
  const contentPage = urlParams.get('content') || 'error'; //content 없으면 error 페이지
  
  // fetch(`${contentPage}.html`) //=>구형 브라우저에서 지원 X
  //   .then(response => response.text())
  //   .then(html => {
  //     contentBody.innerHTML = html;
  //     document.querySelector('body').style.display = 'block';
  //     executeScripts(contentBody);
  //   });

  $.ajax({
    url: `${contentPage}.html`,
    method: 'GET',
    dataType: 'html',
    success: function(html) {
        contentBody.innerHTML = html;
        document.querySelector('body').style.display = 'block';
        executeScripts(contentBody);
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.error('Error loading content:', textStatus, errorThrown);
    }
  });

  
  
  function executeScripts(element) {
    const scripts = element.querySelectorAll('script');

    scripts.forEach(script => {
      if(script.src){ //외부 스크립트 => 브라우저가 스크립트를 로드하고 실행하는 시간이 필요
        const newScript=document.createElement('script');
        newScript.src=script.src;
        document.head.appendChild(newScript);
        newScript.onload= () => document.head.removeChild(newScript);//스크립트 파일이 로드되고 실행되었을 때 DOM에서 제거한다. 
        
      }else{ //인라인 스크립트 => DOM에 <script> 태그를 추가하자마자 js 코드가 실행된다. 
        const newScript = document.createElement('script');
        newScript.textContent = script.textContent;
        //스크립트 실행하고 바로 제거(메모리 누수 방지)
        document.head.appendChild(newScript);
        setTimeout(() => {
          document.head.removeChild(newScript);
        }, 10); // Delay to ensure script executes
      }
    });
  }


}

