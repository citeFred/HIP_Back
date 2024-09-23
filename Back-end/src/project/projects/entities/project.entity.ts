import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, JoinTable } from 'typeorm';
import { User } from '../../../user/user.entity';
import { Project_doc } from '../../project_doc/entities/project_doc.entity';
import { ProjectRegistration } from 'src/project/project_registration/entities/registration.entity';

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    project_id: number;

    @Column({ type: 'varchar', nullable: false, length: 100, unique: true })
    topic: string;

    @Column({ type: 'varchar', nullable: false, length: 50, unique: true })
    class: string;

    @Column({
        type: 'enum',
        enum: ['in_progress', 'completed'],
        default: 'in_progress',
    })
    project_status: 'in_progress' | 'completed';

    @Column({ type: 'varchar', length: 50, nullable: false })
    team_name: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    profile: string; // 파일의 경로 또는 URL

    @Column({ type: 'varchar', length: 255, nullable: true })
    requirements: string;

    // project - user
    @ManyToMany(() => User, (user) => user.projects)
    users: User[];

    // project - project_registration
    @OneToMany(() => ProjectRegistration, (project_registration) => project_registration.project)
    registrations: ProjectRegistration;

    // project - project_doc
    @OneToMany(() => Project_doc, (project_doc) => project_doc.project)
    @JoinTable()
    project_docs: Project_doc[];
}
