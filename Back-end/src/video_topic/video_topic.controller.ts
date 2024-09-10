import { Controller, Post, Get, Patch, Delete, Param, Body, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { VideoTopicService } from './video_topic.service';
import { CreateVideoTopicDto } from './dto/create-video_topic.dto'; // CreateDocNameDto 임포트
import { UpdateVideoTopicDto } from './dto/update-video_topic.dto'; // UpdateDocNameDto 임포트

@Controller('courses/:courseTitle/docNames')
export class VideoTopicController {
    // constructor(private readonly docNameService: VideoTopicService) {}

    // @Post('register')
    // async create(
    //     @Param('courseTitle') courseTitle: string,
    //     @Param('topicTitle') topicTitle: string,
    //     @Body() createDocNameDto: CreateVideoTopicDto
    // ) {
    //     const data = await this.docNameService.create(courseTitle, topicTitle, createDocNameDto);
    //     return {
    //         message: "doc_name 생성에 성공하셨습니다",
    //         data: data
    //     };
    // }

    // @Get()
    // async findAll(
    //   @Param('topicTitle') topicTitle: string
    // ) {
    //     const data = await this.docNameService.findAll(topicTitle);
    //     return {
    //         message: "전체 강의의 doc_name 조회에 성공하셨습니다",
    //         data: data
    //     };
    // }

    // @Get(':topicTitle')
    // async findOne(
    //   @Param('topicTitle') topicTitle: string
    // ) {
    //     const data = await this.docNameService.findOne(topicTitle);
    //     return {
    //         message: "특정 강의의 doc_name 조회에 성공하셨습니다",
    //         data: data
    //     };
    // }

    // @Patch(':topicTitle')
    // async update(
    //   @Param('topicTitle') topicTitle: string,
    //   @Param('id') id: number,
    //   @Body() updateDocNameDto: UpdateDocNameDto
    // ) {
    //   try {
    //     const data = await this.docNameService.update(topicTitle, id, updateDocNameDto);
        
    //     if (!data) {
    //       throw new NotFoundException('Document not found or update failed.');
    //     }
  
    //     return {
    //       message: "doc_name 수정에 성공하셨습니다",
    //       data: data
    //     };
    //   } catch (error) {
    //     console.error('Error updating doc name:', error);
    //     throw new InternalServerErrorException('Failed to update doc name');
    //   }
    // }
  

    // @Delete(':topicTitle')
    // async remove(
    //   @Param('topicTitle') topicTitle: string
    // ) {
    //     const data = await this.docNameService.remove(topicTitle);
    //     return {
    //         message: "doc_name 삭제에 성공하셨습니다",
    //         data: data
    //     };
    // }
}