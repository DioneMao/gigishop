  
  import wepy from 'wepy'

  export const  recorderManager = function () {
  	return wepy.getRecorderManager()
  }

  export const  innerAudioContext = function () {
  	return wepy.createInnerAudioContext()
  }
  
  //src = 'https://images.yitushijie.com/10133414881581813787'