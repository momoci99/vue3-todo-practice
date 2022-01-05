<template>
	<input
		v-model="todoText"
		class="todo-input"
		@input="update"
		@keypress.enter="addTodoItem"
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
}
</style>
