<template>
	<div class="chat-area" id="chatArea">
		<div class="chat-area-header">
			<div class="chat-area-title">電腦聊天</div>
		</div>
		<div class="chat-area-main" id="chatAreaMain" ref="messagesContainer">
			<div v-if="messagedatas.length > 0">
				<div v-for="(val, key, idx) in messagedatas" :key="idx">
					<div class="chat-msg" :class="{ owner: val.usertalk }">
						<div class="chat-msg-profile">
							<img class="chat-msg-img" :src="val.img" alt="" />
							<div class="chat-msg-date">{{ val.time }}</div>
						</div>
						<div class="chat-msg-content">
							<div class="chat-msg-text">{{ val.content }}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="chat-area-footer">
			<input
				type="text"
				placeholder="Type something here..."
				v-model="enteredContentValue"
				@keyup.enter="addMessage"
			/>
			<button @click="addMessage">發送</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'chatRoom',
	props: {
		// msg: String,
	},
	data() {
		return {
			enteredContentValue: '',
			computerContentValue: '',
			timestamp: '',
			messagedatas: [],
		};
	},
	// async created() {
	// 	const response = await this.computerRetured;
	// },
	methods: {
		addMessage() {
			if (
				this.enteredContentValue.replace(/(^s*)|(s*$)/g, '').length !==
				0
			) {
				const dataOwer = {
					usertalk: true,
					img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png',
					content: this.enteredContentValue,
					time: this.getNow(),
				};
				this.messagedatas.push(dataOwer);
				this.computerContentValue = this.enteredContentValue;
				this.enteredContentValue = '';
				this.awaitMessage();
				console.log(this.computerContentValue);
				// console.log(this.messagedatas);
				this.$nextTick(() => {
					window.scrollTo(0, document.body.scrollHeight);
				});
			} else {
				// alert('請輸入文字');
			}
		},
		computerRetured() {
			const computerValue = this.computerContentValue;
			const that = this;
			return new Promise(function (resolve) {
				setTimeout(() => {
					resolve({
						usertalk: false,
						img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png',
						content: computerValue,
						time: that.getNow(),
					});
				}, 1000);
			});
		},
		async awaitMessage() {
			const awaitValue = await this.computerRetured();
			console.log(awaitValue.content);
			this.messagedatas.push(awaitValue);
			this.computerContentValue = '';
			this.timestamp = '';
			this.$nextTick(() => {
				window.scrollTo(0, document.body.scrollHeight);
			});
		},
		// 對話置底function
		scrollToEnd() {
			const content = this.$refs.container;
			content.scrollTop = content.scrollHeight;
		},
		//時間function
		getNow() {
			const today = new Date();
			const date =
				today.getFullYear() +
				'-' +
				(today.getMonth() + 1) +
				'-' +
				today.getDate();
			const time =
				today.getHours() +
				':' +
				today.getMinutes() +
				':' +
				today.getSeconds();
			const dateTime = date + ' ' + time;
			this.timestamp = dateTime;
			// console.log(this.timestamp);
			return dateTime;
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.chat-area {
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	height: 100vh;
	width: 60%;
	position: relative;
	// overflow: auto;
	max-width: 700px;

	overflow: visible;

	&-header {
		display: flex;
		position: sticky;
		top: 0;
		left: 0;
		z-index: 2;
		// margin-bottom: 1.5rem;
		// width: 100%;
		align-items: center;
		justify-content: space-between;
		padding: 20px;
		box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
		background: linear-gradient(
			to bottom,
			rgba(255, 255, 255, 1) 0%,
			rgba(255, 255, 255, 1) 78%,
			rgba(255, 255, 255, 0) 100%
		);
	}
	&-profile {
		width: 32px;
		border-radius: 50%;
		object-fit: cover;
	}
	&-title {
		font-size: 18px;
		font-weight: 600;
	}
	&-main {
		min-height: calc(100% -61px);
		// flex-shrink: 0;
		margin: 3rem 0rem;
		padding-bottom: 2rem;
		// background: red;

		// transform: scale3d(1, 1, 1);
		width: 100%;
	}
}

.chat-msg-img {
	height: 40px;
	width: 40px;
	border-radius: 50%;
	object-fit: cover;
}

.chat-msg-profile {
	flex-shrink: 0;
	margin-top: auto;
	margin-bottom: -20px;
	position: relative;
}

.chat-msg-date {
	position: absolute;
	left: calc(100% + 12px);
	bottom: 0;
	font-size: 12px;
	font-weight: 600;
	color: #626466;
	white-space: nowrap;
}

.chat-msg {
	display: flex;
	padding: 0 10px 45px;
	&-content {
		margin-left: 12px;
		max-width: 70%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	&-text {
		background-color: #383b40;
		padding: 15px;
		border-radius: 20px 20px 20px 0;
		line-height: 1.5;
		font-size: 14px;
		font-weight: 500;
		& + & {
			margin-top: 10px;
		}
	}
}

.chat-msg-text {
	color: #b5b7ba;
}

.owner {
	flex-direction: row-reverse;
	.chat-msg-content {
		margin-left: 0;
		margin-right: 12px;
		align-items: flex-end;
	}
	.chat-msg-text {
		background-color: #0086ff;
		color: #fff;
		border-radius: 20px 20px 0 20px;
	}
	.chat-msg-date {
		left: auto;
		right: calc(100% + 12px);
	}
}

.chat-msg-text img {
	max-width: 300px;
	width: 100%;
}

.chat-area-footer {
	display: flex;
	border-top: 1px solid #eef2f4;
	// width: var(--overall-width);

	padding: 10px 0px;
	align-items: center;
	background-color: #fff;
	// position: sticky;
	// bottom: 0;
	// left: 0;
	box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;

	//
	position: fixed;
	bottom: 0;
	width: inherit;
	max-width: inherit;
}

.chat-area-footer svg {
	color: #7c7e80;
	width: 20px;
	flex-shrink: 0;
	cursor: pointer;
	&:hover {
		color: #9fa7ac;
	}

	& + svg {
		margin-left: 12px;
	}
}

.chat-area-footer input {
	border: none;
	color: #273346;
	background-color: #f8f8fa;
	padding: 12px;
	border-radius: 6px;
	font-size: 15px;
	margin-right: 12px;
	flex-grow: 0;
	// width: calc(100% -12px);
	width: 100%;

	&::placeholder {
		color: #a2a2a2;
	}
}
</style>
