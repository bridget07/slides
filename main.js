var clickImg = function() {
    bindAll('.gao-item', 'click', function(event){
        var self = event.target.parentElement
        var index = self.dataset.index
        showImage(index)
        self.classList.add('gao-highlight')
        var p = self.parentElement
        p.dataset.active = index
    })
}
var clickButton = function() {
    bindAll('span', 'click', function(event){
        var self = event.target
        var step = parseInt(self.dataset.next)
        var p = self.parentElement.parentElement
        log('p', p)
        var a = p.querySelector('.gao-list')
        log('a', a)
        var numOfImgs = parseInt(a.dataset.imgs)
        var activeImg = parseInt(a.dataset.active)
        var nextIndex = (activeImg + step + numOfImgs) % numOfImgs
        a.dataset.active = nextIndex
        showImage(nextIndex)
        var imgSel = '#id-img-' + nextIndex
        log('imgSel', e(imgSel))
        e(imgSel).classList.add('gao-highlight')

    })
}
var showImage = function(index) {
    log('showImage')
    removeClassAll('gao-highlight')
    var n = (-13) * (index - 1)
    e('.gao-list').style.transform = `translateX(${n}rem)`;
}
var _main = function(){
    clickImg()
    clickButton()
}
_main()
