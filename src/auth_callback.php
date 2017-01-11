<?php

if (!empty($_GET['code'])) {
	$curl_header = array(
		'Content-Type: application/x-www-form-urlencoded',
		'Cache-Control: no-cache'
	);
	$params = array(
		'grant_type' => 'authorization_code',
		'client_id' => 9,
		'client_secret' => 'G5ov7sFZFuRKkiB5AG5rTexEpOTj7GWhmP2CXXDz',
		'code' => $_GET['code'],
		'redirect_uri' => 'https://sondreedvardsen.github.io/api-play/auth_callback.php'
	);
	$curl_vars = http_build_query($params)
	$curl = curl_init();
	curl_setopt_array($curl,
		array(
			CURLOPT_URL => "https://auth.mystore.no/oauth/token",
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_ENCODING => "",
			CURLOPT_MAXREDIRS => 10,
			CURLOPT_TIMEOUT => 10,
			CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
			CURLOPT_CUSTOMREQUEST => "POST",
			CURLOPT_HTTPHEADER => $curl_header,
			CURLOPT_POSTFIELDS => $curl_vars
		)
	);
	$curl_result = curl_exec($curl);
	curl_close($curl);
	
	echo "
		<script>
			window.onload = function() {
				localStorage.setItem('apiToken', ".$curl_result.")
			};
		</script>
	";
}

?>
