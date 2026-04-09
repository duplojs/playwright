<template>
	<div class="terminal-block">
		<div
			v-if="title"
			class="terminal-block__header"
		>
			<span class="terminal-block__dot terminal-block__dot--red" />
			<span class="terminal-block__dot terminal-block__dot--yellow" />
			<span class="terminal-block__dot terminal-block__dot--green" />
			<span class="terminal-block__title">{{ title }}</span>
		</div>
		<div class="terminal-block__body"><slot /></div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	title?: string;
}>();
</script>