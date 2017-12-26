const CuteColors = require("..")

console.log(CuteColors.getPalettes())
// => [ 'flat', 'material' ]

console.log(
    CuteColors.getColors(
        "flat"
        // Use only half of the colors
      , 0.5
    )
)
// => { pomegranate: [ '#641e16', '#922b21', '#c0392b', '#d98880', '#f2d7d5' ],
//   alizarin: [ '#78281f', '#b03a2e', '#e74c3c', '#f1948a', '#fadbd8' ],
//   asbestos: [ '#424949', '#616a6b', '#7f8c8d', '#b2babb', '#e5e8e8' ],
//   ...
//   'wet asphalt': [ '#1b2631', '#283747', '#34495e', '#85929e', '#d6dbdf' ],
//   'midnight blue': [ '#17202a', '#212f3d', '#2c3e50', '#808b96', '#d5d8dc' ] }
