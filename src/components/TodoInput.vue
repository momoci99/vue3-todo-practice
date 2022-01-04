<template>
	<input
		v-model="todoText"
		class="todo-input"
		@input="update"
		@keypress.enter="clear"
	/>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
	data() {
		return {
			todoText: String,
		};
	},
	methods: {
		update(event: any) {
			this.todoText = event.target.value;
		},
		clear() {
			this.todoText = "";
		},
	},
})
export default class Input extends Vue {}
</script>
<style scoped lang="scss">
.todo-input {
}
</style>
