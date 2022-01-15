<template>
	<div class="todos">
		<TodoListItem
			v-for="todo in todoList"
			:description="todo.description"
			:id="todo.id"
			:key="todo.id"
			@remove="removeTodo"
		></TodoListItem>
	</div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from "vuex";
import { Options, Vue } from "vue-class-component";
import TodoListItem from "@/components/TodoListItem.vue";

@Options({
	components: {
		TodoListItem,
	},
	computed: {
		...mapGetters(["todoList"]),
	},
	methods: {
		...mapActions(["removeTodo"]),

		remove(id: string) {
			this.removeTodo(id);
		},
	},
})
export default class TodoList extends Vue {}
</script>
