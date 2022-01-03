<template>
	<div class="container">
		<TodoInput />
		<TodoList />
	</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";

@Options({
	components: {
		TodoInput,
		TodoList,
	},
})
export default class Layout extends Vue {}
</script>
