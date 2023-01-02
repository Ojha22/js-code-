let MinimumSteps = []
for(let i = 0; i < arrObj.length; i++){
  MinimumSteps[i] = FindMinimumSteps(i,arrObj,list)
}
return MinimumSteps.indexOf(Math.min(...MinimumSteps))


function FindMinimumSteps(index, arr,list){
  let CurrentItems = arr[index]
  let minSteps = 0
  let left = index
  let right = index
  while(left >= 0 || right < arr.length){
    let leftItems = left >= 0 ? arr[left] : {}
    let rightItems = right < arr.length ? arr[right] : {}
    let combineItems = getCombineItems(leftItems,rightItems,CurrentItems,list)
    if(containsAllItems(combineItems,list)) return minSteps
    minSteps++
    left--
    right++
  }
  return minSteps
}

function getCombineItems(leftItems,rightItems,CurrentItems,list){
  for(let eachItem of list){
    CurrentItems[eachItem] = leftItems[eachItem] || rightItems[eachItem] || CurrentItems[eachItem] ? true : false
  }
  return currItems
}
function containsAllItems(obj,list){
  for(let i = 0; i < list.length; i++){
    let currItem = list[i]
    if(obj[currItem] === false) return false
  }
  return true
}



function apartmentHunting(blocks,reqs){
  let minSteps = []
  for(let i = 0; i < blocks.length; i++){
    minSteps[i] = getMinSteps(i,blocks,reqs)
  }
  return minSteps.indexOf(Math.min(...minSteps))
}

function getMinSteps(index,blocks,reqs){
  let minSteps = 0
  let currItemObj = {}
  for(let key in blocks[index]){
    currItemObj[key] = blocks[index][key]
  }
  
  let left = index
  let right = index
  while(left >= 0 || right < blocks.length){
    let leftObj = left >= 0 ? blocks[left] : {}
    let rightObj = right < blocks.length ? blocks[right] : {}
    let currItemObj = getCombinedObj(leftObj,rightObj, currItemObj,reqs)
    if(containsAllReq(currItemObj,reqs)) return minSteps
    minSteps++
    left--
    right++
  }
  return minSteps
}
function getCombinedObj(leftObj,rightObj,currItemObj,reqs){
  for(let eachReq of reqs){
    currItemObj[eachReq] = leftObj[eachReq] || rightObj[eachReq] || currItemObj[eachReq] ? true : false
  }
  return currItemObj
}

function containsAllReq(currItemObj,reqs){
  for(let i = 0; i < reqs.length; i++){
    let ER = reqs[i]
    if(currItemObj[ER] === false) return false
  }
  return true
}
