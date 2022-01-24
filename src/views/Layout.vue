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
<style lang="scss">
.container {
	// background: #6f4c5b;
	background: #f5e8c7;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
}
</style>
