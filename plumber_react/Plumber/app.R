library(plumber)
# 'plumber.R' is the location of the file shown above
pr("plumber.R") %>%
  pr_run(host = "0.0.0.0",port=7000)

#plumb_api$run(host = "0.0.0.0", port=7000, swagger = T)


