<template>
    <div class="flex justify-center px-4 pt-10">
        <div class="w-full max-w-md overflow-hidden bg-white rounded-md">
            <!-- header -->
            <div
                class="flex flex-col justify-between px-4 py-6 space-y-2 border-b border-gray-100 sm:space-y-0 sm:flex-row bg-gray-50"
            >
                <h1 class="text-xl font-medium text-gray-600">
                    Lista de tareas
                    <small
                        v-if="tasks.length"
                        class="text-xs text-gray-400"
                    >({{ getCompleted() }}/{{ tasks.length }})</small>
                </h1>

                <button v-if="getCompleted()" @click="clearCompleted">Limpiar lista</button>
            </div>

            <NewTask />
            <Tasks :tasks="tasks" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NewTask from '@/components/NewTask.vue'
import Tasks from '@/components/Tasks.vue'
import { useTasks } from '@/store/useTasks'

export default defineComponent({
    name: 'App',

    components: {
        NewTask, Tasks
    },

    setup() {
        const { tasks, getCompleted, clearCompleted } = useTasks()

        return { tasks, getCompleted, clearCompleted }
    }
})
</script>