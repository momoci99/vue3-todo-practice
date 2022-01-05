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
import { mapGetters } from "vuex";
import { Options, Vue } from "vue-class-component";
import TodoListItem from "@/components/TodoListItem.vue";

@Options({
	components: {
		TodoListItem,
	},
	computed: {
		...mapGetters(["todoList"]),
	},
})
export default class TodoList extends Vue {}
</script>
