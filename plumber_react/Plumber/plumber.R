library(tidyverse)


#* @filter cors
cors <- function(res) {
  res$setHeader("Access-Control-Allow-Origin", "*")
  plumber::forward()
}

revString <- function(text){
  paste(rev(unlist(strsplit(text,NULL))),collapse="")
}

#* Return same string
#* @post /reverse
#* @param str
function(str){
  return(revString(str))
}
