import Task from '@/models/Task'
import { reactive, Ref, toRefs } from 'vue'

export interface IuseTask {
    tasks: Ref<Task[]>,
    addTask: (task: Task) => void,
    getCompleted: () => number,
    clearCompleted: () => void
}

export const state = reactive({
    tasks: new Array<Task>()
})

export const useTasks = (): IuseTask => {
    const addTask = (task: Task): void => {
        state.tasks.push(task)
    }

    const getCompleted = (): number => {
        return state.tasks.filter(t => t.completed).length
    }

    const clearCompleted = (): void => {
        state.tasks = state.tasks.filter(t => !t.completed)
    }

    return { ...toRefs(state), addTask, getCompleted, clearCompleted }
}