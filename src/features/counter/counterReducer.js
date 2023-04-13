import { createAction, createReducer } from '@reduxjs/toolkit'

const initalState = {
	menuVisible: false
}

export const toggleMenuLines = createAction('toggleMenuLines')


const Reducer = createReducer(initalState, (builder) => {
	builder
		.addCase(toggleMenuLines, (state) => {
			state.menuVisible = !state.menuVisible
		})
}) 

export default Reducer
