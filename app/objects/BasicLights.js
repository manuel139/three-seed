import { Group, SpotLight, PointLight, AmbientLight,HemisphereLight } from 'three';
import TWEEN, { Linear } from 'gsap';
import store from '../stores/store';

export default class BasicLights extends Group {
  constructor(...args) {
    super(...args);

    const point = new PointLight(0xFFFFFF, 1, 10, 1);
    const dir = new SpotLight(0xFFFFFF, 0.33, 7, 1, 1, 1);
    const ambi = new AmbientLight( 0x404040 , 0.66); // soft white light
    const hemi = new HemisphereLight( 0xffffbb, 0x080820, 0.8 )

    dir.position.set(5, 1, 2);
    dir.target.position.set(0,0,0);

    // dir.castShadow = true;

    // dir.shadow.mapSize.width = 512 * 2;
    // dir.shadow.mapSize.height = 512 * 2;

    // dir.shadow.camera.near = 1;
    // dir.shadow.camera.far = 10;
    // dir.shadow.camera.fov = 40;

    point.position.set(0, 1, 5);

    TWEEN.fromTo(point.position, 4, {x: -2}, {x: 2, yoyo: true, repeat: -1, ease: Linear.easeNone});

    this.add(dir,ambi, hemi)

    store.subscribe( ()=>{
      const { dirinten } = store.getState().App;
      dir.intensity = dirinten;
    } )
  }
}
