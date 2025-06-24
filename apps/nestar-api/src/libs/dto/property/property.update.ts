import { Field, InputType, Int } from "@nestjs/graphql";
import { IsInt, IsNotEmpty, IsOptional, Length, Min, IsEnum } from 'class-validator';
import { ObjectId } from "mongoose";
import { PropertyLocation, PropertyStatus, PropertyType } from "../../enums/property.enum";

@InputType()
export class PropertyUpdate {
    @IsNotEmpty()
    @Field(() => String)
    _id: ObjectId;

    @IsOptional()
    @Field(() => PropertyType, {nullable: true})
    propertyType?: PropertyType;

    @IsOptional()
    @IsEnum(PropertyStatus)
    @Field(() => PropertyStatus, {nullable: true})
    propertyStatus?: PropertyStatus;

    @IsOptional()
    @Field(() => PropertyLocation, {nullable: true})
    propertyLocation?: PropertyLocation;

    @IsOptional()
    @Length(3, 100)
    @Field(() => String, { nullable: true })
    propertyAddress?: string;

    @IsOptional()
    @Length(3, 100)
    @Field(() => String, { nullable: true })
    propertyTitle?: string;

    @IsOptional()
    @Length(3, 100)
    @Field(() => Number, { nullable: true })
    propertyPrice?: number;

    @IsOptional()
    @Field(() => Number, { nullable: true })
    propertySquare?: number;

    @IsOptional()
    @Field(() => Number, { nullable: true })
    memberAddress?: number;

    @IsOptional()
    @IsInt()
    @Min(1)
    @Field(() => Int, { nullable: true })
    propertyBeds?: number;

    @IsOptional()
    @IsInt()
    @Min(1)
    @Field(() => Int, { nullable: true })
    propertyRooms?: number;

    @IsOptional()
    @Field(() => [String], { nullable: true })
    propertyImages?: string[];

    @IsOptional()
    @Length(5, 100)
    @Field(() => String, { nullable: true })
    propertyDesc?: string;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    propertyBarter?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    propertyRent?: boolean;

    @Field(() => Date, { nullable: true })
    @IsOptional()
    soldAt?: Date;

    @Field(() => Date, { nullable: true })
    @IsOptional()
    deletedAt?: Date;

    @IsOptional()
    @Field(() => Date, { nullable: true })
    constructedAt?: Date;
}