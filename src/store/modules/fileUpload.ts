export interface UploadQueue {
  message: string;
  uploading: boolean;
  compress: boolean;
  isImage: boolean;
  file: File;
  channelId: string;
  progress: number;
}

@Module({ dynamic: true, store, namespaced: true, name: "fileUpload" })
class FileUpload extends VuexModule {
  file: { file?: File } = {};
  isImage = false;
  compress = true;
  uploadQueue: UploadQueue[] = [];

  // … SET_FILE, SET_IS_IMAGE, SET_COMPRESS unverändert …

  @Mutation
  private ADD_TO_QUEUE(payload: { channelId: string; message: string }) {
    if (!this.file.file) return;
    this.uploadQueue.push({
      message: payload.message,
      uploading: false,
      compress: this.compress,
      isImage: this.isImage,
      channelId: payload.channelId,
      file: this.file.file,
      progress: 0,
    });
  }

  @Action
  public async RunQueue() {
    if (!this.uploadQueue[0]) return;
    const currentItem = this.uploadQueue[0];
    this.SetQueueUploading({ index: 0, value: true });

    postFormDataMessage(
      currentItem.message,
      currentItem.channelId,
      currentItem.file,
      currentItem.isImage,
      currentItem.compress,
      (error, progress, done) => {
        // Fehler‑/Fortschrittsbehandlung bleibt unverändert …
      }
    );
  }
}
