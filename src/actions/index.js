import * as types from '../constants/ActionTypes'

export const addPermit = details => ({ type: types.ADD_PERMIT, details })
export const addApplicant = details => ({ type: types.ADD_APPLICANT, details })
export const addContractor = details => ({ type: types.ADD_CONTRACTOR, details })
export const addOwner = details => ({ type: types.ADD_OWNER, details })

export const deletePermit = id => ({ type: types.DELETE_PERMIT, id })
export const deleteApplicant = id => ({ type: types.DELETE_APPLICANT, id })
export const deleteContractor = id => ({ type: types.DELETE_CONTRACTOR, id })
export const deleteOwner = id => ({ type: types.DELETE_OWNER, id })

export const editPermit = (id, details) => ({ type: types.EDIT_PERMIT, id, details})
export const editApplicant = (id, details) => ({ type: types.EDIT_APPLICANT, id, details})
export const editContractor = (id, details) => ({ type: types.EDIT_CONTRACTOR, id, details})
export const editOwner = (id, details) => ({ type: types.EDIT_OWNER, id, details})

export const changeSection = section => ({ type: types.CHANGE_SECTION, section})
export const changeExpandedItem = id => ({ type: types.CHANGE_EXPANDED_ITEM, id})
