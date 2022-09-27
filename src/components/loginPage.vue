<template>
	<div class="login-page">
		<transition name="fade">
			<div v-if="!registerActive" class="wallpaper-login"></div>
		</transition>
		<div class="wallpaper-register"></div>

		<div class="container">
			<div class="row">
				<div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
					<div
						v-if="!registerActive"
						class="card login"
						v-bind:class="{ error: emptyFields }"
					>
						<h1>請輸入帳號密碼</h1>
						<form class="form-group">
							<input
								v-model="loginAccount"
								type="text"
								class="form-control"
								placeholder="帳號"
								required
							/>
							<input
								v-model="passwordLogin"
								type="password"
								class="form-control"
								placeholder="密碼"
								required
							/>
							<!-- <input
								type="submit"
								class="btn btn-primary"
								@click="doLogin"
							/> -->
							<button
								class="btn btn-primary mb-4"
								@click="doLogin"
							>
								登入
							</button>

							<p>
								你有帳戶嗎??
								<a
									href="#"
									@click="
										(registerActive = !registerActive),
											(emptyFields = false)
									"
									>點選這裡創建一個帳戶</a
								>
							</p>
							<p><a href="#">忘記密碼?</a></p>
						</form>
					</div>

					<div
						v-else
						class="card register"
						v-bind:class="{ error: emptyFields }"
					>
						<h1>創建一個帳戶</h1>
						<form class="form-group">
							<input
								v-model="accountReg"
								type="text"
								class="form-control"
								placeholder="帳號"
								required
							/>
							<input
								v-model="passwordReg"
								type="password"
								class="form-control"
								placeholder="密碼"
								required
							/>
							<input
								v-model="confirmReg"
								type="password"
								class="form-control"
								placeholder="密碼確認"
								required
							/>
							<!-- <input
								type="submit"
								class="btn btn-primary"
								@click="doRegister"
							/> -->
							<button
								class="btn btn-primary mb-4"
								@click="doRegister"
							>
								登入
							</button>
							<p>
								<a
									href="#"
									@click="
										(registerActive = !registerActive),
											(emptyFields = false)
									"
									>點選登入</a
								>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios';

export default {
	name: 'loginPage',
	props: {
		// msg: String,
	},
	data() {
		return {
			registerActive: false,
			loginAccount: 'user001',
			passwordLogin: 'user001',
			accountReg: '',
			passwordReg: '',
			confirmReg: '',
			emptyFields: false,
		};
	},

	methods: {
		doLogin() {
			if (this.loginAccount === '' || this.passwordLogin === '') {
				this.emptyFields = true;
			} else {
				this.$router.replace('/');
				const bodyFormData = new FormData();
				bodyFormData.append('account', this.loginAccount);
				bodyFormData.append('password', this.passwordLogin);

				const apiURL = 'http://192.168.8.166:3000/login'; // origin api url
				// api call
				// console.log(bodyFormData.getAll('password'));
				// console.log(this.loginData());
				// this.loginData();
				axios({
					method: 'post',
					url: `${apiURL}`,
					data: bodyFormData,
					// headers: { 'Content-Type': 'multipart/form-data' },
				})
					.then(function (response) {
						//handle success
						console.log(response);
					})
					.catch(function (response) {
						//handle error
						console.log(response);
					});
			}
		},

		doRegister() {
			if (
				this.accountReg === '' ||
				this.passwordReg === '' ||
				this.confirmReg === ''
			) {
				this.emptyFields = true;
			} else {
				alert('此帳號已經註冊!!');
			}
		},
		async loginData() {
			const loginedData = await axios({
				method: 'post',
				url: 'http://192.168.8.166:3000/login',
				data: {
					account: 'user005',
					password: 'user005',
				},
			})
				.then(res => {
					// console.table(res.data);
					return res.data;
				})
				.catch(error => {
					// console.error(error);
					return error;
				});
			return loginedData;
		},
	},
};
</script>
<style lang="scss" scoped>
.container {
	font-family: -apple-system, BlinkMacSystemFont, 'Muli', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
p {
	line-height: 1rem;
}

.card {
	padding: 20px;
}

.form-group {
	input {
		margin-bottom: 20px;
	}
}

.login-page {
	align-items: center;
	display: flex;
	height: 100vh;

	.wallpaper-login {
		background: url(https://images.pexels.com/photos/32237/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
			no-repeat center center;
		background-size: cover;
		height: 100%;
		position: absolute;
		width: 100%;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s;
	}
	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}

	.wallpaper-register {
		background: url(https://images.pexels.com/photos/533671/pexels-photo-533671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
			no-repeat center center;
		background-size: cover;
		height: 100%;
		position: absolute;
		width: 100%;
		z-index: -1;
	}

	h1 {
		margin-bottom: 1.5rem;
	}
}

.error {
	animation-name: errorShake;
	animation-duration: 0.3s;
}

@keyframes errorShake {
	0% {
		transform: translateX(-25px);
	}
	25% {
		transform: translateX(25px);
	}
	50% {
		transform: translateX(-25px);
	}
	75% {
		transform: translateX(25px);
	}
	100% {
		transform: translateX(0);
	}
}
</style>
