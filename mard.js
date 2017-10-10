<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
  <script src="http://cdnjs.cloudflare.com/ajax/libs/marked/0.3.6/marked.js">
    
  </script>
  
</head>
<body>
  <div id="content"></div>
  <script>
    var markdown=`
# Marked in browser
## Rendered by **marked**.`
    var html=marked(markdown)
    document.getElementById('content').innerHTML =html
      
