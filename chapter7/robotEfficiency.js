function lazyRobot ({ place, parcels }, route) {
  if (route.length === 0) {
    const routes = parcels.map(parcel => {
      if (parcel.place !== place) {
        return {
          route: findRoute(roadGraph, place, parcel.place),
          pickUp: true
        }
      } else {
        return {
          route: findRoute(roadGraph, place, parcel.address),
          pickUp: false
        }
      }
    })

    const score = ({ route, pickUp }) => (pickUp ? 0.5 : 0) - route.length

    route = routes.reduce((a, b) => (score(a) > score(b) ? a : b)).route
  }

  return { direction: route[0], memory: route.slice(1) }
}

runRobotAnimation(VillageState.random(), lazyRobot, [])
