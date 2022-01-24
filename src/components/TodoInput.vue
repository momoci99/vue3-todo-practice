<template>
	<input
		v-model="todoText"
		class="todo-input"
		@input="update"
		@keypress.enter="addTodoItem"
		type="text"
	/>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions } from "vuex";

@Options({
	data() {
		return {
			todoText: "",
		};
	},
	methods: {
		update(event: any) {
			this.todoText = event.target.value;
		},
		addTodoItem() {
			if (this.todoText) {
				this.addTodo(this.todoText);
				this.todoText = "";
			}
		},
		...mapActions(["addTodo"]),
	},
})
export default class Input extends Vue {}
</script>
<style scoped lang="scss">
.todo-input {
	width: 400px;
	height: 100px;
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

	padding: 0 30px;
	font-size: 24px;

	border-radius: 10px;
}
</style>
