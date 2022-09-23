<template>
	<div class="container">
		<h1>請輸入帳號密碼</h1>
		<form>
			<div class="form-control">
				<input type="text" required />
				<label>帳號</label>
			</div>

			<div class="form-control">
				<input type="password" required />
				<label>密碼</label>
			</div>

			<button class="btn">登入</button>

			<p class="text"><a href="#">建立帳戶</a></p>
		</form>
	</div>
</template>
<script>
export default {
	name: 'chatRoom',
	props: {
		// msg: String,
	},
};
</script>
<style lang="scss" scoped>
.container {
	background-color: rgba(0, 0, 0, 0.4);
	padding: 20px 40px;
	border-radius: 5px;
}

.container h1 {
	text-align: center;
	margin-bottom: 30px;
}

.container a {
	text-decoration: none;
	color: lightblue;
}

.form-control {
	position: relative;
	margin: 20px 0 40px;
	width: 300px;
}

.form-control input {
	background-color: transparent;
	border: 0;
	border-bottom: #fff 2px solid;
	display: block;
	width: 100%;
	padding: 15px 0;
	font-size: 18px;
	color: #fff;
}

.btn {
	cursor: pointer;
	display: inline-block;
	width: 100%;
	background-color: lightblue;
	padding: 15px;
	font-family: inherit;
	font-size: 16px;
	border: 0;
	border-radius: 5px;
}

.btn:focus {
	outline: 0;
}

.btn:active {
	transform: scale(0.98);
}

.text {
	margin-top: 30px;
}

.form-control label {
	position: absolute;
	top: 15px;
	left: 0;
}

.form-control label span {
	display: inline-block;
	font-size: 18px;
	min-width: 5px;
	transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.form-control input:focus,
.form-control input:valid {
	outline: 0;
	border-bottom-color: lightblue;
}

.form-control input:focus + label span,
.form-control input:valid + label span {
	color: lightblue;
	transform: translateY(-30px);
}
</style>
