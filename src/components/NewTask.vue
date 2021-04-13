<template>
    <div class="bg-white border-b border-gray-100">
        <div class="flex items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                class="w-6 h-6 ml-4 text-gray-400"
            >
                <path
                    fill="currentColor"
                    d="M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"
                />
            </svg>

            <input
                type="text"
                placeholder="Ingresar tarea y apretar Enter"
                class="py-6"
                v-model.trim="newTask"
                v-on:keyup.enter="onAddTask"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Task from '@/models/Task';
import { useTasks } from '@/store/useTasks'
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const { addTask } = useTasks()


        const newTask = ref('');

        const onAddTask = () => {
            if (newTask.value === '') return;

            addTask(new Task(newTask.value))
            newTask.value = ''
        }

        return { newTask, onAddTask }
    }
});
</script>