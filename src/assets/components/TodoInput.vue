<template>
	<input class="todo-input" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
	methods: {},
})
export default class Input extends Vue {}
</script>
<style scoped lang="scss">
.todo-input {
}
</style>
