import Data from "./data"
import DataInstance from "./data_instance"

export default class Camera extends Data {
  constructor(scene, name, clipStart, clipEnd, lens) {
    super(scene, name)
    this.clipStart = clipStart
    this.clipEnd = clipEnd
    this.lens = lens
  }

  createInstance(sceneInstance) {
    this.checkNotDisposed()
    return new CameraInstance(sceneInstance, this)
  }

  performDisposal() { }
}

class CameraInstance extends DataInstance {
  constructor(sceneInstance, data) {
    super(sceneInstance, data)
    this.setFrame(0)
  }

  performSetFrame(frame) {
    this.clipStart = this.data.clipStart.sample(frame)
    this.clipEnd = this.data.clipEnd.sample(frame)
    this.lens = this.data.lens.sample(frame)
  }

  performDisposal() { }
}