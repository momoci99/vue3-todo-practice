<template>
	<article>{{ description }}</article>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
	components: {},
	props: ["description"],
	setup(props) {
		console.log(props);
	},
})
export default class TodoListItem extends Vue {}
</script>
