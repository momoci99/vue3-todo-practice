<template>
	<article class="todo-list-item">
		<p class="item-description">{{ description }}</p>
		<button class="item-delete" @click="$emit('remove', id)">delete</button>
	</article>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
	components: {},
	props: ["id", "description"],
	emits: ["remove"],
	setup(props) {
		console.log(props);
	},
})
export default class TodoListItem extends Vue {}
</script>
<style lang="scss">
.todo-list-item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem;
	border-bottom: 1px solid #ccc;

	//shadow
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
}
</style>
