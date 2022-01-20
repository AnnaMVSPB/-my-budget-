/* eslint-disable array-callback-return */
const initialState = {
  caterories: [],
  statistics: [],
  totalExecution: [],
  totalIncom: [],
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_USER_SESSION':
      return {
        ...state,
        user: action.payload
      };

    case 'EXPENDITURE_STATISTICS':
      let categoriesExpenses = action.payload.data.expenses
      let monthYear = action.payload.monthYear
      let income = action.payload.data.income
      let copyCategoriesExpenses = [...categoriesExpenses]
      let copyTotalExpenses = 0
      let copyIncom = 0
      let dataExpenses = action.payload.data.expensesSum
      console.log(dataExpenses)
      copyCategoriesExpenses.forEach((categorie) => {
        categorie.sum = 0
        dataExpenses.forEach((dataExpense) => {
          if (categorie.id === dataExpense.expensesId && dataExpense.createdAt.slice(0, 7) === monthYear[0]) {
            categorie.sum += Number(dataExpense.sum)
          }
        })
      })
      copyCategoriesExpenses.map((sum) => {
        copyTotalExpenses += sum.sum
      })

      income.map((incom) => {
        if (incom.createdAt.slice(0, 7) === monthYear[0]) {
          copyIncom += incom.income
        }
      })
      return {
        ...state,
        categories: categoriesExpenses,
        statistics: copyCategoriesExpenses,
        totalExecution: copyTotalExpenses,
        totalIncom: copyIncom
      }
      
    case 'SAVE_COST_CATEGORIES':
      return {
        ...state,
        caterories: action.payload
      }
    default:
      return state;
  }
}

export default reducer;
