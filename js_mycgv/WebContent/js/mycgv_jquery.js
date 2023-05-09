$(document).ready(function(){
	/******************************************************
					게시판 글쓰기 폼
	 ******************************************************/

	

	/******************************************************
			회원가입 폼 - 주소찾기 : kakao API 
	 ******************************************************/
	$("#btnSearchAddr").click(function(){
		new daum.Postcode({
			oncomplete: function(data) {
				// data = {zonecode: "12345", address: "서울시 강남구...",,,,}
				/*alert(data.address);*/
				$("#addr1").val("(" + data.zonecode + ") " + data.address);
				$("#addr2").focus();
				// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
				// 예제를 참고하여 다양한 활용법을 확인해 보세요.
			}
		}).open();
		
	}); // search address
	
	
	/******************************************************
				회원가입 폼 - 이메일 확인 
	 ******************************************************/
	$("#email3").on("change", function(){
		/*if($("#email3").val() == "default"){
			alert("이메일 주소를 선택해주세요.");
			$("#email2").val("");
			$("#email3").focus();
		} else if($("email3").val() == "self"){
			$("#email2").val("").focus();
		} else{
			$("#email2").val($("#email3").val());
		}*/
		$("#email2").val($("#email3 option:selected").val());
	});
	
	
	/******************************************************
			회원가입 폼 - 비밀번호 & 비밀번호 확인 
	 ******************************************************/
	$("#cpass").on("blur", function(){
		if($("#pass").val() != "" && $("#cpass").val() != ""){
			if($("#pass").val() == $("#cpass").val()){
				$("#cmsg").text("비밀번호가 일치합니다.").css("color", "blue")
					.css("font-size", "11px").css("display", "block");
			} else{
				$("#cmsg").text("비밀번호가 일치하지 않습니다.").css("color", "red")
				.css("font-size", "11px").css("display", "block");
				
				$("#pass").val("").focus();
				$("#cpass").val("");
			}
		}
	}); // cpass blur
	
	/******************************************************
			회원가입 폼 - 유효성체크(값의 유무 확인)
	 ******************************************************/
	$("#btnJoin").click(function(){
		if($("#id").val() == ""){
			alert("아이디를 입력해주세요.");
			$("#id").focus();
			return false;
		} else if($("#pass").val() == ""){
			alert("비밀번호를 입력해주세요.");
			$("#pass").focus();
			return false;
		} else if($("#cpass").val() == ""){
			alert("비밀번호 확인을 입력해주세요.");
			$("#cpass").focus();
			return false;
		} else if($("#name").val() == ""){
			alert("이름을 입력해주세요.");
			$("#name").focus();
			return false;
		} else if($("input[name='gender']:checked").length == 0){
			alert("성별을 선택해주세요.");
			return false;
		} else if($("#email1").val() == ""){
			alert("이메일을 입력해주세요.");
			$("#email1").focus();
			return false;
		} else if($("#email2").val() == ""){
			alert("이메일 주소를 선택해주세요.");
			$("#email3").focus();
			return false;
		} else if($("#addr1").val() == ""){
			alert("주소를 입력해주세요.");
			$("#btnSearchAddr").focus();
			return false;
		} else if($("input[name='tel']:checked").length == 0){
			alert("통신사를 선택해주세요.");
			return false;
		} else if($("#phone1").val() == "default"){
			alert("번호를 선택해주세요.")
			return false;
		} else if($("#phone2").val() == ""){
			alert("번호를 입력해주세요.");
			$("#phone2").focus();
			return false;
		} else if($("#phone3").val() == ""){
			alert("번호를 입력해주세요.");
			$("#phone3").focus();
			return false;
		} else if($("input[name='hobby']:checked").length == 0){
			alert("취미를 선택해주세요.");
			return false;
		} else{
			// 서버전송
			joinForm.submit();
		}
	});
	
	/******************************************************
						로그인 폼 
	******************************************************/
	$("#btnLogin").click(function(){
		if($("#id").val() == ""){
			alert("아이디를 입력해주세요.");
			$("#id").focus();
			return false;
		} else if($("#pass").val() == ""){
			alert("비밀번호를 입력해주세요.");
			$("#pass").focus();
			return false;
		} else{
			// 서버전송
			loginForm.submit();
		}
	}); // btnLogin click
	// $("#btnLogin").on("click", function(){});
	
	/******************************************************
					로그인 폼 - 다시쓰기
	 ******************************************************/
	$("#btnLoginReset").click(function(){
		$("#id").val("").focus();
		$("#pass").val("");
	}); // btnLoginReset click

}); // ready