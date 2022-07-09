import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from './user.entity';

// req 객체 안에 user 객체가 들어있을 때 그걸 req.user가 아닌 그냥 user로 이용할 수 있게 하는 데코레이터
export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
