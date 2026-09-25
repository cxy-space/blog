(function () {
  'use strict'

  var canvas = document.createElement('canvas')
  canvas.id = 'sakura-canvas'
  canvas.setAttribute('aria-hidden', 'true')
  document.body.appendChild(canvas)

  var context = canvas.getContext('2d')
  var petals = []
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  var colors = ['rgba(255, 216, 225, .86)', 'rgba(244, 169, 190, .78)', 'rgba(255, 239, 243, .9)']

  function resize() {
    var ratio = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = window.innerWidth * ratio
    canvas.height = window.innerHeight * ratio
    canvas.style.width = window.innerWidth + 'px'
    canvas.style.height = window.innerHeight + 'px'
    context.setTransform(ratio, 0, 0, ratio, 0, 0)
  }

  function createPetal(initial) {
    return {
      x: Math.random() * window.innerWidth,
      y: initial ? Math.random() * window.innerHeight : -20,
      size: 3 + Math.random() * 6,
      speed: .45 + Math.random() * 1.15,
      sway: .5 + Math.random() * 1.4,
      phase: Math.random() * Math.PI * 2,
      rotation: Math.random() * Math.PI,
      spin: -.025 + Math.random() * .05,
      color: colors[Math.floor(Math.random() * colors.length)]
    }
  }

  function reset() {
    petals = []
    var count = window.innerWidth < 700 ? 24 : 52
    for (var i = 0; i < count; i += 1) petals.push(createPetal(true))
  }

  function drawPetal(petal, time) {
    var sway = Math.sin(time * .001 * petal.sway + petal.phase) * 18
    context.save()
    context.translate(petal.x + sway, petal.y)
    context.rotate(petal.rotation)
    context.fillStyle = petal.color
    context.beginPath()
    context.ellipse(0, 0, petal.size, petal.size * .55, -.35, 0, Math.PI * 2)
    context.fill()
    context.restore()
  }

  function animate(time) {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight)
    petals.forEach(function (petal) {
      petal.y += petal.speed
      petal.rotation += petal.spin
      if (petal.y > window.innerHeight + 24) Object.assign(petal, createPetal(false))
      drawPetal(petal, time)
    })
    if (!reducedMotion.matches) window.requestAnimationFrame(animate)
  }

  resize()
  reset()
  window.addEventListener('resize', function () {
    resize()
    reset()
  })
  if (reducedMotion.matches) {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight)
  } else {
    window.requestAnimationFrame(animate)
  }
})()
