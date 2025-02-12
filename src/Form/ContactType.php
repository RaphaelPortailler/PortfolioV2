<?php

namespace App\Form;

use App\Entity\Contact;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'label_attr' => ['class' => 'label'],
                'required' => true,
                'label' => 'Name :'
            ])
            ->add('email', EmailType::class, [
                'label_attr' => ['class' => 'label'],
                'required' => true,
                'label' => 'Email :'
            ])
            ->add('subject', TextType::class, [
                'label_attr' => ['class' => 'label'],
                'required' => true,
                'label' => 'Subject :'
            ])
            ->add('message', TextareaType::class, [
                'label_attr' => ['id' => 'labelMessage'],
                'required' => true,
                'label' => 'Message :',
                'attr' => [
                    'rows' => 10
                ]
            ])
            // ->add('contactedAt', null, [
                //'widget' => 'single_text',
            //])
            ->add('submit', SubmitType::class, [

                'label' => 'Envoyer',
                'attr' => ['class' => 'montserrat button']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Contact::class,
        ]);
    }
}
