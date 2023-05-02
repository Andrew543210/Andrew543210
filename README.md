<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #timer{
            margin-left: 200px;
            width: 200px;
            height: 80px;
            background-color: rgb(237, 5, 195);
            border-radius: 60%;
            border: 3px solid rgb(255, 255, 255);
            font-size: 20px;
            color: black;
           text-align: center;
        }
        .btns{
            width: 200px;
margin-left: 200px;
height: 60px;
display: flex;
justify-content: space-between;
        }
        .btns>button{
            width: 60px;
            background-color: bisque;
        }
    </style>
</head>
<body>
    <div id="timer"></div>
<div class="btns">
<button onclick="startTimer()">Start</button>
<button onclick="stopTimer()">Stop</button>
<button onclick="clearTimer()">Clear</button>
</div>
      <script src="les25.js"></script>
</body>
</html>

</body>
</html>
