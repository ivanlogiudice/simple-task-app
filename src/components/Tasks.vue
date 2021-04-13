<template>
    <div v-for="(task, index) in tasks" :key="index" class="task-item">
        <input type="checkbox" v-model="task.completed" />
        <input type="text" v-model="task.name" :disabled="task.completed" />
    </div>
</template>

<script lang="ts">
import Task from '@/models/Task';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    props: {
        tasks: {
            type: Array as PropType<Task[]>,
            required: true
        }
    },
});
</script>