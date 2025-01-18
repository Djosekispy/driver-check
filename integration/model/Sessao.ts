
export default  class Sessao {
    id : number;
  sessionId: string;
  userId: number;
  
    constructor(
        id : number,
        sessionId: string,
        userId: number
    ) {
        this.id = id;
      this.sessionId = sessionId;
      this.userId = userId;
  }
  
}