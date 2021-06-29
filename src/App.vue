<template>
  <section class="main shadow">
    <router-view></router-view>
  </section>
  <Footer/>

</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer,
  },
}
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
</script>

<style>

#app {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1677%26quot%3b)' fill='none'%3e%3cpath d='M175.783%2c401.527C192.029%2c401.432%2c207.839%2c394.018%2c215.743%2c379.824C223.46%2c365.965%2c221.447%2c348.656%2c212.528%2c335.538C204.594%2c323.869%2c189.89%2c320.736%2c175.783%2c321.053C162.353%2c321.355%2c149.412%2c326.065%2c141.796%2c337.13C132.945%2c349.989%2c127.72%2c366.489%2c135.007%2c380.295C142.674%2c394.821%2c159.358%2c401.623%2c175.783%2c401.527' fill='rgba(59%2c 116%2c 193%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1203.69%2c708.709C1260.134%2c707.723%2c1302.572%2c662.535%2c1329.259%2c612.788C1354.282%2c566.143%2c1358.335%2c512.025%2c1334.581%2c464.721C1307.977%2c411.741%2c1262.939%2c364.755%2c1203.69%2c362.726C1141.563%2c360.599%2c1085.149%2c400.131%2c1056.296%2c455.193C1029.313%2c506.687%2c1041.066%2c567.054%2c1070.286%2c617.312C1099.325%2c667.258%2c1145.925%2c709.718%2c1203.69%2c708.709' fill='rgba(59%2c 116%2c 193%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1015.319%2c24.44C1028.63%2c23.603%2c1039.473%2c15.332%2c1046.591%2c4.053C1054.346%2c-8.237%2c1059.615%2c-22.861%2c1053.481%2c-36.035C1046.425%2c-51.19%2c1032.016%2c-63.93%2c1015.319%2c-63.112C999.489%2c-62.337%2c990.696%2c-46.513%2c983.125%2c-32.589C976.025%2c-19.53%2c969.091%2c-4.475%2c976.398%2c8.469C983.787%2c21.557%2c1000.319%2c25.384%2c1015.319%2c24.44' fill='rgba(59%2c 116%2c 193%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1008.293%2c411.237C1068.686%2c410.337%2c1128.489%2c383.115%2c1156.273%2c329.485C1182.349%2c279.151%2c1160.295%2c221.748%2c1131.869%2c172.702C1103.553%2c123.845%2c1064.762%2c74.065%2c1008.293%2c74.155C951.926%2c74.245%2c914.387%2c124.753%2c885.399%2c173.095C855.221%2c223.422%2c825.563%2c281.864%2c852.473%2c334.011C880.966%2c389.224%2c946.169%2c412.162%2c1008.293%2c411.237' fill='rgba(59%2c 116%2c 193%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1445.742%2c426.879C1504.389%2c430.362%2c1565.584%2c406.456%2c1593.538%2c354.783C1620.508%2c304.93%2c1598.022%2c246.983%2c1569.588%2c197.95C1541.279%2c149.132%2c1502.171%2c99.37%2c1445.742%2c99.909C1389.905%2c100.443%2c1351.025%2c150.396%2c1325.927%2c200.278C1303.673%2c244.508%2c1302.368%2c295.096%2c1325.512%2c338.867C1350.395%2c385.927%2c1392.603%2c423.723%2c1445.742%2c426.879' fill='rgba(59%2c 116%2c 193%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M161.906%2c695.177C212.011%2c694.852%2c266.529%2c691.001%2c294.477%2c649.414C325.184%2c603.722%2c327.376%2c540.714%2c296.21%2c495.334C267.927%2c454.152%2c211.725%2c452.642%2c161.906%2c456.38C119.874%2c459.534%2c82.576%2c478.575%2c58.495%2c513.169C29.575%2c554.713%2c1.316%2c607.142%2c26.322%2c651.153C51.481%2c695.434%2c110.978%2c695.507%2c161.906%2c695.177' fill='rgba(59%2c 116%2c 193%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1216.366%2c288.743C1235.305%2c289.117%2c1249.906%2c274.777%2c1260.157%2c258.847C1271.617%2c241.038%2c1283.475%2c219.273%2c1272.86%2c200.948C1262.258%2c182.646%2c1237.501%2c182.44%2c1216.366%2c183.251C1197.078%2c183.991%2c1176.259%2c188.125%2c1166.916%2c205.015C1157.775%2c221.539%2c1165.869%2c240.915%2c1175.472%2c257.175C1184.858%2c273.067%2c1197.913%2c288.379%2c1216.366%2c288.743' fill='rgba(59%2c 116%2c 193%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M111.365%2c82.71C128.237%2c83.088%2c145.957%2c78.824%2c154.975%2c64.56C164.538%2c49.435%2c164.036%2c29.62%2c154.507%2c14.473C145.521%2c0.188%2c128.228%2c-5.429%2c111.365%2c-4.764C95.729%2c-4.147%2c81.774%2c4.231%2c73.74%2c17.659C65.466%2c31.487%2c62.942%2c48.731%2c71.01%2c62.68C79.069%2c76.613%2c95.273%2c82.35%2c111.365%2c82.71' fill='rgba(59%2c 116%2c 193%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1359.992%2c538.191C1382.951%2c537.926%2c1406.609%2c530.36%2c1417.935%2c510.387C1429.14%2c490.627%2c1424.42%2c465.895%2c1411.636%2c447.118C1400.363%2c430.559%2c1380.017%2c424.75%2c1359.992%2c425.28C1341.035%2c425.782%2c1323.726%2c434.178%2c1312.878%2c449.733C1299.92%2c468.314%2c1289.039%2c491.757%2c1299.688%2c511.751C1310.747%2c532.515%2c1336.469%2c538.462%2c1359.992%2c538.191' fill='rgba(59%2c 116%2c 193%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M-9.476%2c534.811C13.02%2c534.604%2c30.133%2c517.335%2c41.602%2c497.981C53.362%2c478.137%2c60.844%2c454.498%2c50.264%2c434C38.92%2c412.023%2c15.248%2c399.657%2c-9.476%2c399.021C-35.413%2c398.354%2c-62.676%2c407.839%2c-74.786%2c430.785C-86.342%2c452.682%2c-75.371%2c477.966%2c-62.206%2c498.935C-50.091%2c518.232%2c-32.26%2c535.02%2c-9.476%2c534.811' fill='rgba(59%2c 116%2c 193%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M690.219%2c256.309C722.613%2c254.04%2c743.136%2c225.091%2c758.778%2c196.633C773.659%2c169.559%2c784.287%2c138.373%2c770.137%2c110.91C754.938%2c81.411%2c723.39%2c62.636%2c690.219%2c63.575C658.446%2c64.475%2c634.281%2c88.061%2c617.775%2c115.225C600.419%2c143.789%2c587.461%2c177.831%2c602.728%2c207.564C619.072%2c239.394%2c654.525%2c258.809%2c690.219%2c256.309' fill='rgba(59%2c 116%2c 193%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M305.322%2c500.775C329.163%2c500.468%2c349.365%2c486.614%2c362.854%2c466.953C378.902%2c443.561%2c395.124%2c414.638%2c381.48%2c389.767C367.556%2c364.384%2c334.273%2c362.24%2c305.322%2c362.079C275.974%2c361.916%2c242.128%2c363.365%2c227.683%2c388.912C213.359%2c414.244%2c228.57%2c444.563%2c245.163%2c468.47C259.073%2c488.512%2c280.928%2c501.089%2c305.322%2c500.775' fill='rgba(59%2c 116%2c 193%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M759.588%2c562.522C814.12%2c565.035%2c871.91%2c547.583%2c899.129%2c500.263C926.292%2c453.042%2c909.889%2c395.826%2c882.593%2c348.682C855.37%2c301.664%2c813.915%2c259.956%2c759.588%2c259.257C704.281%2c258.545%2c656.457%2c296.351%2c630.976%2c345.444C607.401%2c390.863%2c614.594%2c444.326%2c640.678%2c488.352C666.199%2c531.428%2c709.572%2c560.217%2c759.588%2c562.522' fill='rgba(59%2c 116%2c 193%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1677'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
  background-size: cover;
  height:100vh;
  height: calc(var(--vh, 1vh) * 100);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8,1fr);
  align-items: center;
  justify-content: center;

}
.main{
    margin: 0 auto;
    grid-column: 2 / -2;
    grid-row: 2 / -2;
    max-width: 450px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px 15px;
    border-radius: 15px;
    padding: 30px;
    border: 1px solid #e0e0e0;
    background-color: #fff;
}
.top-buttons{
  flex: 1 1 100%;
  padding-bottom:20px;
}
.add-btn, .break-btn{
    flex: 1 3 30%;
}
.reset-btn{
  flex: 1 1 100%;
}
.scale-enter-active {
  animation: scale 0.5s;
}
.scale.leave-active {
  animation: scale 0.5s reverse;
}
@keyframes scale {
    0% {
      transform:scale(1)
      }
    50%{
      transform:scale(1.5);
    }
    100% {
      transform:scale(1)
    }
}
.settings-btn{
  text-align: center;
  color:white;
  border: none;
  border-radius: 50%;
  background-color:grey!important;
  width:55px;
  font-size: 1em;
  height:55px;
}
.main-btn{
  text-align: center;
  color:white;
  background-color:#0d6efd!important;
  border: none;
  border-radius: 50%;
  width:75px;
  font-size: 1.5em;
  height:75px;
}
.pause-btn{
    background-color:#ffc107!important;
    animation: scale 0.5s;

}
.resume-btn{
    background-color:#198754!important;
    transition: all 0.3s linear;
}
#dotsCycle{
  flex: 1 1 100%;
}
.dot {
  height: 10px;
  width: 10px;
  background-color: rgb(175, 175, 175);
  border-radius: 50%;
  margin: 5px;
transition: all 0.5s ease-in;
  display: inline-block;
}
.activeDot{
    background-color: rgb(85, 85, 85) !important;
}
.currentDot{
    animation: currentD 1s ease-in infinite;
}

@keyframes currentD{
    0%{
        opacity: 1;
    }
    50%{
        opacity: 0.3;
    }
    100%{
        opacity: 1;
    }
}
</style>
