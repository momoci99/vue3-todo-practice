<template>
	<div class="todos">
		<TodoListItem
			v-for="(todo, index) in todoList"
			:description="todo"
			:key="index"
		></TodoListItem>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TodoListItem from "@/components/TodoListItem.vue";

@Options({
	components: {
		TodoListItem,
	},
	data() {
		return {
			todoList: ["todo1", "todo2", "todo3"],
		};
	},
})
export default class TodoList extends Vue {}
</script>
