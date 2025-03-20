import { RootState } from "@react-three/fiber";

declare module "@react-three/fiber" {
  interface ThreeElements {
    // primitive: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { object: THREE.Object3D };
    primitive: any;
    }
}